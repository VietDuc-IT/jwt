import classNames from 'classnames/bind';
//import Header from "../components/Layouts/components/Header";
import Header from '../components/Header';
import styles from './Sidebar.module.scss';
import Sidebar from '../components/Sidebar';

const cx = classNames.bind(styles);

function SidebarOnly({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default SidebarOnly;
