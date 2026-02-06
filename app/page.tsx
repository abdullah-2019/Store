import { Button } from '@/components/ui/button';
import db from '@/utils/db';
//import db from "@/utils/db";

async function HomePage() {
  const users = await db.user.findMany();

  return (
    <main>
      <h1>Welcome to the Store</h1>
      <p>Total users found: {users.length}</p>
    </main>
  );
} 
