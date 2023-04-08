export const getfetch = () => {
    return fetch('/api/menu')
        .then(res => res.json())
        .then(data => data)
}