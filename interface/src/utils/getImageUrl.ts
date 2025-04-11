export function getImageUrl( // getImageUrl( 'peds' OU 'uniforms' OU 'weapons', NOME IMG);
  type: "peds" | "uniforms" | "weapons",
  imageName: string
):string {
  const baseUrl = "https://winsapi.discloud.app/dev";
  return `${baseUrl}/${type}/${imageName}.webp`;
}
  
