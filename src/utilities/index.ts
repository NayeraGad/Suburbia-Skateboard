import { Content } from "@prismicio/client"

export type SlidesBundleSlice = {
    id: string;
    slice_type: 'slides_bundle';
    slices: Content.SlideSlice[]
}

export const bundleSlides = (slices: Content.HomeDocumentDataSlicesSlice[]) => {
    
    const res: (
        | Content.HomeDocumentDataSlicesSlice
        | SlidesBundleSlice
    )[] = []

    for (const slice of slices) {
        if(slice.slice_type !== 'slide') {
            res.push(slice)
            continue
        }

        const bundle = res.at(-1)

        if(bundle?.slice_type === 'slides_bundle') {
            bundle.slices.push(slice)
        } else {
            res.push({
                id: `${slice.id}-bundle`,
                slice_type: 'slides_bundle',
                slices: [slice]
            })
        }
    }

    return res
}

export const getDominantColor = async (url: string) => {
    const palletURL = new URL(url)

    palletURL.searchParams.set('palette', 'json')

    const res = await fetch(palletURL)
    const json = await res.json()
    
    return (json.dominant_colors.vibrant?.hex || json.dominant_colors.vibrant_light?.hex )
}

