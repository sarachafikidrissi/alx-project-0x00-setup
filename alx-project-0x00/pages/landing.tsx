import Button from "@/components/Button";
import Card from "@/components/Card"

const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
        <Button title="submit" styles="rounded-sm text-sm"/>
      </div>
    )
  }
  export default Landing