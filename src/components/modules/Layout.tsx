import { WithChildren } from 'src/types/UI';
import Header from 'src/components/modules/Header';

const Layout = ({ children }: WithChildren) => (
  <div>
    <Header />
    <main>{children}</main>
    {/* TODO add footer */}
    {/* <Footer /> */}
  </div>
);

export default Layout;
