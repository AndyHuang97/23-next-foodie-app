import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  //   throw new Error("Failed to fetch meal data from db");
  return db.prepare("SELECT * FROM meals").all();
}

// here we are not simulating delay to trigger the loading page
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      // return a serializable object (no functions) that will be used by useFormState hook
      return {
        message: "Invalid input."
      }
    }
  });

  // public folder is the root folder when server
  meal.image = `/images/${fileName}`;

  db.prepare(`
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email, image, slug)
    VALUES 
    (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)
    `).run(meal);
}
