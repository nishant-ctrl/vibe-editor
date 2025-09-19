import { Button } from "@/components/ui/button";
import Image from "next/image";
import { db } from "@/lib/db";
export default function Home() {
  const user=db.user
  return (
      <div className="flex flex-col justify-center min-h-screen items-center">
          <Button>Hello</Button>
      </div>
  );
}
