export function getImageUrl( 
  type:string,
  imageName: string
):string {
  const baseUrl = "https://wins.company/assets/TesteFrontEnd";
  return `${baseUrl}/${type}/${imageName}.webp`;
}
  
