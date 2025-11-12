import { Box, Container, Heading, Text, Card, Flex,Badge } from "@radix-ui/themes";
import { IoSunnyOutline } from "react-icons/io5";
import { FcBusinesswoman } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";

function Home() {
  return (
    <Container size="3" py="6">
      <Box>
        <Heading
          size="7"
          mb="4"
          color="indigo"
          className="flex items-center gap-2 "
        >
          <IoSunnyOutline />
          Come and explore my world of creativity
        </Heading>

        <Text size="4" mb="5" color="brown">
          Where imagination meets technology
        </Text>

        <Flex direction="column" gap="5">
          <Card className="bg-[#D9C68F]" mt="5">
            <Heading size="5" mb="2" className="flex items-center gap-2 ">
              <FcBusinesswoman size={22} />
              About Me
            </Heading>
            <Text>
              สวัสดีค่ะ ดิฉัน
              เป็นนักศึกษาวิศวกรรมคอมพิวเตอร์ที่ชอบผสมผสานความคิดสร้างสรรค์กับเทคโนโลยี
              เว็บไซต์นี้เป็นพื้นที่เล็กๆของฉันในการแบ่งปันตัวตนสิ่งที่ได้เรียนรู้ และสิ่งที่ฉันรักในการสร้างสรรค์
            </Text>
          </Card>

          <Card className="bg-[#D9C68F]">
            <Heading size="5" mb="2" className="flex items-center gap-2">
              <FcSettings size={22} />
              Design & Development Tools
            </Heading>
            <Text>
              "Here are the technologies I use to bring my ideas to life."
              <br />
                 <Flex gap="2" wrap="wrap">
                  <Badge size="2" color="tomato"> • React + TypeScript</Badge>
                  <Badge size="2" color="tomato"> • React + API</Badge>
                  <Badge size="2" color="tomato"> • React Router (for page navigation)</Badge>
                  <Badge size="2" color="tomato"> • Radix UI (for modern UI components)</Badge>
                  <Badge size="2" color="tomato">• Vite (for fast builds and performance)</Badge>
                 </Flex>
            </Text>
          </Card>
        </Flex>
      </Box>
    </Container>
  );
}

export default Home;
