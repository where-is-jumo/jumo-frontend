import React, {Component} from 'react'
import Head from "next/head";
import Button from "../components/elements/Button";

interface ButtonPageProps {
}

class ButtonPage extends Component<ButtonPageProps> {
    public render() {
        return (
            <>
                <Head>
                    <title>Jumo Button</title>
                </Head>
                <div>
                    Default<br/>
                    <div>code</div>
                    <code>
                        {`<Button>This is Button</Button>`}
                    </code>
                    <div>example</div>
                    <Button>This is Button</Button>
                </div>
                <br/>
                <div>
                    Property Content<br/>
                    <div>code</div>
                    <code>
                        {`<Button content={"This is Button"}/>`}
                    </code>
                    <br/>
                    <div>example</div>
                    <Button content={"This is Button"}/>
                </div>
                <br/>
                <div>
                    onClick<br/>
                    <div>code</div>
                    <code>
                        {`<Button content={"onClick alert"} onClick={() => alert("jumo, here!")}/>`}
                    </code>
                    <div>example</div>
                    <Button content={"onClick alert"} onClick={() => alert("jumo, here!")}/>
                </div>
                <br/>
                <div>
                    Disabled<br/>
                    <div>code</div>
                    <code>
                        {`<Button disabled>disabled button</Button>`}
                    </code>
                    <div>example</div>
                    <Button disabled>disabled button</Button>
                </div>
            </>
        );
    }
}

export default ButtonPage