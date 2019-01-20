import React from "react";
import Button from "../../components/Button";
import LinkList from "../../components/LinkList";
import Input from "../../components/Input";

const Main = () => (
    <div>
        <Input />
        <Button>Get URL</Button>
        <LinkList
            items={[
                {
                    title: "https://longlink.com",
                    url: "https://test.com"
                },
                {
                    title: "https://longlink.com",
                    url: "https://test.com"
                }
            ]}
        />
    </div>
);

export default Main;
