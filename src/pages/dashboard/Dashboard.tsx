import { Typography } from "@/components/Typography";
import { Button } from "@chakra-ui/react";

function Dashboard() {
  return (
    <div>
      Dashboard
      <Button colorScheme="info.main" size="xs">
        Click me
      </Button>
      <Button colorScheme="info.main" size="sm">
        Click me
      </Button>
      <Button colorScheme="info.main" size="md">
        Click me
      </Button>
      <Button size="lg" variant="outline" colorScheme="error.main">
        Click me
      </Button>
      <Typography variantText="sm" sx={{ color: "blue" }}>
        asd
      </Typography>
    </div>
  );
}

export default Dashboard;
