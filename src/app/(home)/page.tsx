import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-4">
      <div>
        <Button variant="elevated">I am a button</Button>
      </div>
      <div>
        <Input placeholder="I am Input" />
      </div>
      <div>
        <Progress value={45} />
      </div>
      <div>
        <Textarea placeholder="I'm text area" />
      </div>
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
