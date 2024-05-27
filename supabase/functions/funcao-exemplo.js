// supabase/functions/funcao-exemplo.js
export const onRequest = async (event) => {
  return new Response("Olá, mundo!");
};