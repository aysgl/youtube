import { createContext, useEffect, useState } from "react";
import categories from "../utils/data/menu/categories";
import { getData } from "../utils/helpers/helper";


export const YoutubeContext = createContext();

export const YoutubeProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const [videos, setVideos] = useState(null)

    useEffect(() => {
        if (selectedCategory.type === "home" || selectedCategory.type === "trending") {
            getData(`/${selectedCategory.type}`).then((res) => setVideos(res.data.data))
        }
        if (selectedCategory.type === "category") {
            getData(`/search?${selectedCategory.name}&type=video`).then((res) => setVideos(res.data))
        }
    }, [selectedCategory])

    return (
        <YoutubeContext.Provider value={{ selectedCategory, setSelectedCategory, videos }}>
            {children}
        </YoutubeContext.Provider>
    )
}