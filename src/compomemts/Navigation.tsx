import { Link, useLocation } from "react-router-dom";
import { Flex, Button, Box } from "@radix-ui/themes";
import { IoHome } from "react-icons/io5";
import { IoToggle } from "react-icons/io5";

function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <>
      <Box className="border-b border=gra-200 bg-white">
        <Flex gap="3" p="4" justify="center" wrap="wrap">
          <Link to="/" className="on-underline">
            <Button style={{ backgroundColor: "#714624ff",color:"white",border: "2px solid Black" }}
              variant={isActive("/") ? "solid" : "soft"} size="3">
              <IoHome size={18} />
              Home
            </Button>
          </Link>
          <Link to="/profile" className="on-underline">
            <Button
              style={{ backgroundColor: "#21a011ff",color: "white",border: "2px solid Black"}}
              variant={isActive("/profile") ? "solid" : "soft"}
              size="3">
              <IoToggle size={18} />
              Portfolio
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
export default Navigation;
