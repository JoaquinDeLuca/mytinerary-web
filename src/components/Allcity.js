import AllCities from "./AllCities"

export default function Allcity() {
    const cities = [
        { url: "https://c4.wallpaperflare.com/wallpaper/662/782/517/obelisco-de-buenos-aires-argentina-buenos-aires-city-wallpaper-preview.jpg" , city: "Buenos Aires"},
        { url: "https://images2.alphacoders.com/946/946722.jpg" , city: "Rio de Janeiro"},
        { url: "https://images5.alphacoders.com/815/815875.jpg" , city: "Madrid"},
        { url: "https://fondosmil.com/fondo/60652.jpg" , city: "Roma"},
        { url: "https://w0.peakpx.com/wallpaper/647/346/HD-wallpaper-venice-italy-landscape-graphy.jpg" , city: "Venecia"},
        { url: "https://p4.wallpaperbetter.com/wallpaper/221/423/653/cities-brussels-belgium-grand-palace-wallpaper-preview.jpg" , city: "Bruselas"},
        { url: "https://i0.wp.com/laderasur.com/wp-content/uploads/2017/06/Captura-de-pantalla-2017-06-02-a-las-14.32.14.jpg?ssl=1" , city: "Santiago de chile"},
        { url: "https://media.istockphoto.com/photos/panoramic-aerial-view-of-miraflores-town-in-lima-peru-picture-id992182190?k=20&m=992182190&s=612x612&w=0&h=KuLYAWsPmy9a8oyDcvRToYJNhx1KxurCniF5Uj1erh0=" , city: "Lima"},
        { url: "https://fondosmil.com/fondo/15090.jpg" , city: "Londres"},
        { url: "https://p4.wallpaperbetter.com/wallpaper/451/971/669/cardiff-castle-in-wales-wallpaper-preview.jpg" , city: "Cardiff"},
        { url: "https://p4.wallpaperbetter.com/wallpaper/526/773/141/bridge-river-boats-portugal-wallpaper-preview.jpg" , city: "Porto"},
        { url: "https://images6.alphacoders.com/703/thumb-1920-703494.jpg" , city: "Paris"},
    ]

  return (
    <div>
        <AllCities data={cities}/>
    </div>
  )
}
