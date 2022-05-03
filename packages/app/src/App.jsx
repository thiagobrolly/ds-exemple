import './styles/global.scss';
import {
  Heading,
  Card,
  Button,
  TextField,
  Spinner,
} from '@thiago_brolly/components';
import {
  PlOutlineAppstore,
  PlOutlineArrowDown,
  PlOutlineWallet,
} from '@thiago_brolly/icons';

export function App() {
  return (
    <div>
      <h1>Components</h1>
      <Heading bold size="large">
        Title 1
      </Heading>
      <Card title="Title" subTitle="Sub-Title">
        Card
      </Card>
      <Button size="medium" appearance="approve">
        <PlOutlineWallet size={14} color="#fff" /> Click
      </Button>
      <Card style={{ backgroundColor: '#e3e3e3' }}>
        <TextField
          label="Default"
          name="name"
          outline={false}
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Default Search"
          name="search"
          inputType="search"
          outline={false}
          style={{ marginBottom: 20 }}
          iconDefault
          // icon={<Spinner />}
          iconPosition="right"
        />
        <TextField
          label="Default"
          name="name"
          inputType="email"
          outline={false}
          style={{ marginBottom: 20 }}
          iconDefault
          // icon={<Spinner />}
          iconPosition="right"
        />
        <TextField
          label="Icon Left"
          name="email"
          inputType="email"
          outline={false}
          iconDefault
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Default"
          name="name"
          inputType="email"
          style={{ marginBottom: 20 }}
          // iconDefault
          outline={false}
          icon={<Spinner />}
          iconPosition="left"
        />
        <TextField
          label="Icon Left"
          name="email"
          inputType="email"
          iconDefault
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Icon Right"
          name="email"
          inputType="email"
          iconDefault
          iconPosition="right"
          style={{ marginBottom: 20 }}
        />
        <TextField
          label="Icon External"
          name="TextField"
          icon={<Spinner />}
          style={{ marginBottom: 20 }}
          outline
        />

        <TextField
          label="Default"
          name="email"
          inputType="email"
          outline
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="Password"
          name="email"
          inputType="password"
          iconDefault
          iconPosition="right"
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="Search"
          name="search"
          inputType="search"
          iconDefault
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="Email"
          name="email"
          inputType="email"
          iconDefault
          disabled
          style={{ marginBottom: 20 }}
        />

        <TextField
          label="Email"
          name="email"
          inputType="email"
          iconDefault
          error="Error"
          style={{ marginBottom: 20 }}
        />
      </Card>
      {/* <ExampleDefault size={100} color="green" />
      <IconUser size={100} color="green" />
      <IconArrow size={100} color="green" /> */}
      <PlOutlineWallet color="green" />
      <PlOutlineAppstore color="green" />
      <PlOutlineArrowDown color="green" />
    </div>
  );
}
