import {
  Box,
  Container,
  Heading,
  Text,
  Card,
  Flex,
  Avatar,
  Badge,
  Separator,
} from "@radix-ui/themes";
import { FcLike } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLine } from "react-icons/fa";
function Profile() {
  return (
    <Container size="3" py="6">
      <Card className="bg-[#D9C68F]">
        <Flex direction="column" gap="4">
          <Flex align="center" gap="4">
            <Avatar
              size="8"
              radius="full"
              fallback=""
              color="blue"
              src="01.jpg"
            />
            <Box>
              <Heading size="7" color="indigo">
                Natthaya Decha
              </Heading>
              <Text size="3" className="text-[#6C1A12]">
                นักศึกษาวิศวกรรมคอมพิวเตอร์
              </Text>
            </Box>
          </Flex>

          <Separator size="4" />

          <Box>
            <Heading
              size="5"
              mb="3"
              className="text-[#6C1A12] flex items-center gap-2 "
            >
              <FcLike />
              About me
            </Heading>
            <Text>
              ฉันชื่อนางสาว ณัฐธยา เดชา เป็นนักศึกษาวิทยาลัยวิศกรรมศาสตร์เละเทคโนโลยี
              สาขาวิศวกรรมคอมพิวเตอร์ มีความสนใจในด้านการพัฒนาเว็บไซต์
              fronend Blackend และเทคโนโลยีเว็บใหม่ๆตั้งใจพัฒนาทักษะของตนเองเพื่อก้าวไปเป็นนักพัฒนาซอฟต์แวร์ที่สามารถสร้างประสบการณ์ต่อตัวฉันได้
            </Text>
          </Box>
             <Separator size="4" />
          <Box>
            <Heading size="5" mb="3" className="text-[#6C1A12] flex items-center gap-2">
              <FcBusinesswoman />
              Contact Me
            </Heading>        
              <Text className="flex items-center gap-2">
                <MdEmail color="red"/>Natthaya2546@gmail.com
                <FaLine  color="green"/>Nathhya2546
                <BsFillTelephoneFill color="brown" />096-932-3609

              </Text>
          </Box>

          <Separator size="4" />

          <Box>
            <Heading
              size="5"
              mb="3"
              className="text-[#6C1A12] flex items-center gap-2 ">
              <FcReading />
              My Learning Journey
            </Heading>
            <Card mb="3">
              <Flex direction="column" gap="2">
                <Heading size="4">Bachelor’s Degree - Computer Engineering </Heading>
                <Text >Dhurakij Pundit University</Text>
                <Text size="2">
                  2023 – Present
                </Text>
              </Flex>
            </Card>
          </Box>

          <Separator size="4" />
          <Box>
            <Heading size="5" mb="3" className="text-[#6C1A12] flex items-center gap-2">
              <FcServices />
              Soft Skills
            </Heading>
            <Flex gap="2" wrap="wrap">
              <Badge size="2" color="blue">
                Frontend:HTML/CSS · JavaScript · TypeScript · React · Tailwind CSS
              </Badge>
              <Badge size="2" color="green">
                Backend: Node.js
              </Badge>
              <Badge size="2" color="gray">
                Tools: Git/GitHub · Radix UI
              </Badge>

              <Badge size="2" color="sky">
                Communication
              </Badge>
              <Badge size="2" color="teal">
                Creativity
              </Badge>
            </Flex>
          </Box>
        </Flex>
      </Card>
    </Container>
  );
}

export default Profile;
