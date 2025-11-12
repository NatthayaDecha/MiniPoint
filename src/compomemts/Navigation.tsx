import { Link, useLocation } from "react-router-dom";
import { Flex, Button, Box } from "@radix-ui/themes";
import { IoHome } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

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
            <Button style={{ backgroundColor: "#ef448eff",color:"Black",border: "2px solid Black" }}
              variant={isActive("/") ? "solid" : "soft"} size="3">
              <IoHome size={18} />
              หน้าหลัก
            </Button>
          </Link>
          <Link to="/profile" className="on-underline">
            <Button
              style={{ backgroundColor: "#ef4444",color: "Black",border: "2px solid Black"}}
              variant={isActive("/profile") ? "solid" : "soft"}
              size="3">
              <IoHeart size={18} />
              ประวัติส่วนตัว
            </Button>
          </Link>
        </Flex>
      </Box>
    </>
  );
}
export default Navigation;
