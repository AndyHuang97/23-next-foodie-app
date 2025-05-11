import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default function MealPage({ params }) {
  const meal = getMeal(params.slug);

  const mealInstructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"EMAIL"}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        {/* dangerouslySetInnerHTML: to set output as HTML content
        BUT open yourself to cross-site scripting attack*/}
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: mealInstructions }}
        ></p>
      </main>
    </>
  );
}
