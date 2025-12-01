export const getDominantColor = async (url: string) => {
    const palletURL = new URL(url)

    palletURL.searchParams.set('palette', 'json')

    const res = await fetch(palletURL)
    const json = await res.json()
    
    return (json.dominant_colors.vibrant?.hex || json.dominant_colors.vibrant_light?.hex )
}