import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFi4rMtr9msFg/profile-displayphoto-shrink_800_800/0/1597929816695?e=1629331200&v=beta&t=V29BhAzEbwCGGQgquMqHVVOEnil5A1Po9m5rrqMyr1g"
        />
        <Dropdown pointing="top left" text="Öykü">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
