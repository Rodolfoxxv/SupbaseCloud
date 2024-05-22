# Configuração do Provedor Supabase
provider "supabase" {
  url       = var.supabase_url
  anon_key = var.supabase_anon_key
}

