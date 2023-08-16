import Header from "./components/Header"
const Layout = ({component}) => {
    return (
        <>
            <Header />
            {component}
        </>
    )
};

export default Layout;