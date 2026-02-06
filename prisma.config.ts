import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    // Ensure you use the URL with the %40 for your password
    // url: "postgresql://postgres.ccxrebrntparftfcdijy:Abdhuss%402026@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres?pgbouncer=true&connection_limit=1",
    //url: "postgresql://postgres.ccxrebrntparftfcdijy:Abdhuss%402026@://aws-1-ap-southeast-2.pooler.supabase.com",
    url: "postgresql://postgres.rtoazawtlxalfsfkiojg:5RjHRtOPELjgg7DR@aws-1-ap-south-1.pooler.supabase.com:5432/postgres"
  },
});