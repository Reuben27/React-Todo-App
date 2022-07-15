import { Layout } from 'antd';
const { Footer } = Layout;

const FooterBar = () => {
  return(
    <Footer style={{ textAlign: 'center' , height: '6vh', alignItems : 'center', backgroundColor: '#fff' }}>
      <div>
        <p>
          &copy;{' '}
          <a href='/' target='_blank' rel="noreferrer">
            Todo App
          </a>{' '}
          by{' '}
          <a href='https://github.com/Reuben27' target='_blank' rel="noreferrer">
            Reuben Devanesan
          </a>{' '}
        </p>
      </div>
    </Footer>
  );
}

export default FooterBar;