import PocketBase from 'pocketbase';
export const pb = new PocketBase(process.env.NEXT_PUBLIC_API_URL).autoCancellation(false);;
// export const pb = new PocketBase(process.env.NEXT_PUBLIC_API_URL)

export const getImageURL = (
  collection_name: string,
  id: string,
  image_name: string
) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/files/${collection_name}/${id}/${image_name}`;
};