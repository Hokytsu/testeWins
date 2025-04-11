export function getImageUrl( // getImageUrl( 'peds' OU 'uniforms' OU 'weapons', NOME IMG);
  type: "peds" | "uniforms" | "weapons",
  imageName: string
):string {
  const baseUrl = "https://wins.company/assets/TesteFrontEnd";
  return `${baseUrl}/${type}/${imageName}.webp`;
}
  
