import React from "react";
import ReactDOM from "react-dom/client";

function lorem(iterations: number):String {
    let lor: String = "";
    for (let i = 0; i < iterations; ++i) {
        lor += "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odio vero reiciendis numquam eaque. Recusandae autem mollitia ex repellendus quam ipsam laudantium dolore cumque similique voluptatem assumenda, culpa eaque impedit? ";
    }
    return lor;
}

class MainView extends React.Component {
    render () {
        return (
            <div>
                <MyMonsters></MyMonsters>
                <SideMenu></SideMenu>
            </div>
        )
    }
}

class SideMenu extends React.Component {
    render() {
        return (
            <div className="side-menu side-menu-closed">
                <button>▷</button>
            </div>
        )
    }
}

class MyMonsters extends React.Component {
    render() {
        return (
            <div className="my-monsters">
                <MyMonstersMain></MyMonstersMain>
                <MyMonstersAux></MyMonstersAux>
            </div>
        )
    }
}

class MyMonstersMain extends React.Component {
    render() {
        let lor = lorem(30);
        return (
            <div className="my-monsters-main">{lor}</div>
        )
    }
}

class MyMonstersAux extends React.Component {
    render() {
        let lor = lorem(40);
        return (
            <div className="my-monsters-aux">{lor}</div>
        )
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