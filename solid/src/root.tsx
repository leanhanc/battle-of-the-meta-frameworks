// @refresh reload
import {
  A,
  Body,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";

// Styles
import "./styles/reset.css";
import "./styles/app.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Visit Argentina</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          name="description"
          content="This is a fake site part of a technical experiment."
        />
      </Head>
      <Body>
        <Routes>
          <FileRoutes />
        </Routes>
        <Scripts />
      </Body>
    </Html>
  );
}
