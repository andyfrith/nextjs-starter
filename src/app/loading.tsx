import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
} from "@nextui-org/react";

export default function Loading() {
  return (
    <Card className="mx-auto mt-4 h-[140px] w-[340px] border-none bg-gradient-to-br from-black to-red-100">
      <CardBody className="items-center justify-center pb-0">
        <CircularProgress
          className="mx-auto"
          classNames={{
            svg: "w-16 h-16 drop-shadow-md",
            indicator: "stroke-white",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={70}
          strokeWidth={4}
          aria-label="Loading page..."
        />
      </CardBody>
      <CardFooter className="items-center justify-center pt-0">
        <Chip
          classNames={{
            base: "border-1 border-white/30",
            content: "text-white/90 text-small font-semibold",
          }}
          variant="bordered"
        >
          Loading page...
        </Chip>
      </CardFooter>
    </Card>
  );
}
