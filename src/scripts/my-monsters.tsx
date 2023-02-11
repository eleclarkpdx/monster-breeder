import React from "react";
import ReactDOM from "react-dom/client";

function lorem(iterations: number): String {
    let lor: String = "";
    for (let i = 0; i < iterations; ++i) {
        lor +=
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio vero reiciendis numquam eaque. Recusandae autem mollitia ex repellendus quam ipsam laudantium dolore cumque similique voluptatem assumenda, culpa eaque impedit? ";
    }
    return lor;
}

class MainView extends React.Component {
    render() {
        return (
            <div>
                <MyMonsters></MyMonsters>
                <SideMenu></SideMenu>
            </div>
        );
    }
}

interface SideMenuState {
    collapsed: boolean;
}

class SideMenu extends React.Component<{}, SideMenuState> {
    constructor(props: any) {
        super(props);
        let collapsed: boolean = true;

        this.state = {
            collapsed: collapsed,
        };
    }

    public collapseToggle(): boolean {
        let toggled = !this.state.collapsed;
        this.setState({ collapsed: toggled });
        return toggled;
    }

    render() {
        let widthClass: string;
        if (this.state.collapsed === true) {
            widthClass = "side-menu-closed";
        } else {
            widthClass = "side-menu-open";
        }

        return (
            <div className={`side-menu ${widthClass}`}>
                <SideMenuOpener
                    collapseToggle={this.collapseToggle.bind(this)}
                ></SideMenuOpener>
                <SideMenuItems collapsed={this.state.collapsed}></SideMenuItems>
            </div>
        );
    }
}

interface SideMenuOpenerProps {
    collapseToggle: () => boolean;
}

class SideMenuOpener extends React.Component<SideMenuOpenerProps> {
    private collapsed: boolean = true;
    private handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        this.collapsed = this.props.collapseToggle();
    };

    render() {
        let buttonSymbol: string;
        if (this.collapsed) {
            buttonSymbol = "▷";
        } else {
            buttonSymbol = "◁";
        }

        return <button onClick={this.handleClick}>{buttonSymbol}</button>;
    }
}

interface SideMenuItemsProps {
    collapsed: boolean;
}

class SideMenuItems extends React.Component<SideMenuItemsProps> {
    render() {
        let visibilityClass: string;
        if (this.props.collapsed) {
            visibilityClass = "collapsed";
        } else {
            visibilityClass = "";
        }
        return (
            <div className={`side-menu-items ${visibilityClass}`}>
                <SideMenuItem></SideMenuItem>
                <SideMenuItem></SideMenuItem>
                <SideMenuItem></SideMenuItem>
                <SideMenuItem></SideMenuItem>
                <SideMenuItem></SideMenuItem>
            </div>
        );
    }
}

class SideMenuItem extends React.Component {
    render() {
        return <div className="side-menu-item"></div>;
    }
}

class MyMonsters extends React.Component {
    render() {
        return (
            <div className="my-monsters">
                <MyMonstersMain></MyMonstersMain>
                <MyMonstersAux></MyMonstersAux>
            </div>
        );
    }
}

class MyMonstersMain extends React.Component {
    render() {
        let lor = lorem(30);
        return <div className="my-monsters-main">{lor}</div>;
    }
}

class MyMonstersAux extends React.Component {
    render() {
        let lor = lorem(40);
        return <div className="my-monsters-aux">{lor}</div>;
    }
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <MainView></MainView>
    </React.StrictMode>
);
