export const apiCall = (link: string) => fetch(link).then(resp => {
    return resp.json()
})
