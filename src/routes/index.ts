/** @type {import('./[id]').RequestHandler} */
export async function get({ params }) {
    await fetch("http://localhost:5050");
    return {
        status: 200,
        headers: {
            "set-cookie": "hello=world",
        }
    };
}
