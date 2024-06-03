import type { Video } from "~/interfaces/video";

export const useVideoStore = defineStore("videos", () => {
    const favoritos = ref<Video[]>([]);
    const { $toast } = useNuxtApp();

    
const adicionarFavorito = (video: Video) => {
    const favoritosFiltrados = favoritos.value.some((v) => v.id === video.id);
    if (!favoritosFiltrados) {
    favoritos.value.push(video);
    $toast.success("Vídeo Favoritado!");
    }
};

const deletarFavorito = (id: number) => {
    const favoritosFiltrados = favoritos.value.filter((v) => v.id !==id);
    favoritos.value = favoritosFiltrados;
    $toast.error("Favorito Removido!");

};


return { adicionarFavorito, deletarFavorito, favoritos}
});