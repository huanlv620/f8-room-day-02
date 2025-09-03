import clsx from 'clsx';
import Button from '../../components/Button';
import styles from './Buttons.module.scss';

function Buttons() {
    return (
        <div className={clsx(styles['list-btns'])}>
            <div>
                <h3>basic button</h3>
                <Button>Click me!</Button>
            </div>
            <div>
                <h3>primary button</h3>
                <Button primary>Primary Button</Button>
            </div>
            <div>
                <h3>link button</h3>
                <Button href="https://google.com" target="_blank">
                    Go to Google
                </Button>
            </div>
            <div>
                <h3>sizes button</h3>
                <Button size="small">Small</Button>
                <Button size="medium">Medium</Button>
                <Button size="large">Large</Button>
            </div>
            <div>
                <h3>Variants button</h3>
                <Button bordered>Bordered</Button>
                <Button rounded>Rounded</Button>
                <Button primary rounded>
                    Primary Rounded
                </Button>
            </div>
            <div>
                <h3>onclick button</h3>
                <Button onClick={() => alert('Clicked!')}>Click Alert</Button>
            </div>
            <div>
                <h3>disabled button</h3>
                <Button disabled onClick={() => alert('Should not show')}>
                    Disabled Button
                </Button>
            </div>
            <div>
                <h3>loading button</h3>
                <Button loading onClick={() => console.log('Should not log')}>
                    Loading Button
                </Button>
            </div>
            <div>
                <h3>custom button</h3>
                <Button className={clsx(styles['my-custom-class'])} primary>
                    Custom Styled
                </Button>
            </div>
            <div>
                <h3>icon button</h3>
                <Button primary>
                    <span>😍</span> Send Email
                </Button>
            </div>
        </div>
    );
}

export default Buttons;
