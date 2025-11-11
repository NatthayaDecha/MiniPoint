import { Box, Container, Heading, Text, Card, Flex } from "@radix-ui/themes";
import { IoHeartOutline } from "react-icons/io5";

function Home() {
  return (
    <Container size="3" py="6">
      <Box>
        <Heading size="8" mb="4" color="pink">
          ยินดีต้อนรับสู่โลกของฉัน
        </Heading>

        <Text size="4" mb="5" color="gray">
          เว็บไชต์ของฉันเอง ยินดีต้อนรับ
        </Text>

        <Flex direction="column" gap="5">
          <Card className="bg-gray-500" mt="5">
            <Heading size="5" mb="2" className="flex items-center gap-2 ">
              <IoHeartOutline  size={22}/>
              เกี่ยวกับเว็บไซต์ของฉัน
            </Heading>

            <Text>
              เว็บไซต์นี้สร้างมาเพื่อเเนะนำตัวฉันเอง ในการเเนะนำชื่อ
              การเเนะนำตัวเเละรวมไปถึงการใช้เทคฌนโลยีเกี่ยวกับการเขียนโค้ด
            </Text>
          </Card>

          <Card className="bg-gray-500">
            <Heading size="5" mb="2" className="flex items-center gap-2">
              <IoHeartOutline  size={22}/>
              เทคโนโลยีที่ใช้
            </Heading>
            <Text>
              • React + TypeScript <br />
              • React +Api <br />
              • React Router สำหรับการจัดการหน้าเว็บ <br />
              • Radix UI สำหรับ UI Components <br />• Vite สำหรับ Build Tool
            </Text>
          </Card>
        </Flex>
      </Box>
    </Container>
  );
}

export default Home;
