import classes from "./loading.module.css"

// loading.js is a reserved file name for loading pages
// now we want to use another approach for better UX
export default function MealsLoadingPage() {
    return <p className={classes.loading}>Fetching meals ...</p>
}