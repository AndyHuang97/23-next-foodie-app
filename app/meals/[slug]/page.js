export default function MealPage({params}) {
    return <main>
        <h1>The Meal</h1>
        <p>{params.slug}</p>
    </main>
}