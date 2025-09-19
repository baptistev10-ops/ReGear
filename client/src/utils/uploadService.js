import supabase from "./supabaseClient";
// (file) est le type de l'input
export async function uploadImage(file) {
  // création du nom de l'image (unique)
  const filePath = `blogs/${Date.now()}_${file.name}`;

  const { error } = await supabase.storage
    .from("ReGear-blog")
    .upload(filePath, file);
  // si erreur pendant l'upload, retourner erreur
  if (error) throw error;
  // récupération de l'url publique de l'image avec le bucket: ReGear-blog
  const { data } = supabase.storage.from("ReGear-blog").getPublicUrl(filePath);

  return data.publicUrl;
}
