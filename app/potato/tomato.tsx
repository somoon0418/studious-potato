import type { Route } from "../+types/root";

export default function Tomato(){
    return (
        <div>Tomato</div>
    )
}

export const links: Route.LinksFunction = () => [
    {rel: "stylesheet", href: "potato.com"}
]

export const meta: Route.MetaFunction = () => [
    {title: "Tomato"},
    {description: "Tomato is a delicious fruit"}
]
