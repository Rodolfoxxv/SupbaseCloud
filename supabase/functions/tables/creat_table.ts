import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.PROJECT_ID, process.env.SUPABASE_ACCESS_TOKEN)

export const onRequest = async (event) => {
  const { tableName, data } = await event.json()

  // Cria a tabela
  const createTableResponse = await supabase.rpc('create_table', { table_name: tableName })
  if (createTableResponse.error) {
    return new Response(JSON.stringify({ error: createTableResponse.error.message }), { status: 500 })
  }

  // Insere os dados na tabela
  const insertDataResponse = await supabase.from(tableName).insert(data)
  if (insertDataResponse.error) {
    return new Response(JSON.stringify({ error: insertDataResponse.error.message }), { status: 500 })
  }

  return new Response(JSON.stringify(insertDataResponse.data))
}
