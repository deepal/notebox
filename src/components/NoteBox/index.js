import React from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import Note from './Note';
import NoteBoxTag from './NoteBoxTag';
import NoteBoxSideBar from './NoteBoxSideBar';

class NoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: ['vi', 'linux', 'mac', 'bash', 'shell'],
            notes: [
                {
                    "title": "Laborum culpa anim eu commodo do consequat proident proident ullamco et.",
                    "content": "Voluptate incididunt consequat mollit esse sit magna tempor duis exercitation ut in culpa exercitation commodo. Ea et sint ex laboris veniam ut. Sunt exercitation velit irure minim labore duis adipisicing esse ex labore ullamco. Ullamco eiusmod cillum labore magna proident enim aliqua aute consequat nulla non est. Sint magna excepteur exercitation duis deserunt. Et anim laboris ex quis amet reprehenderit duis minim non.\r\n"
                },
                {
                    "title": "In dolor tempor ut ad officia.",
                    "content": "Nostrud labore consequat proident consequat voluptate in cillum. Dolor mollit sit eiusmod culpa. Irure nostrud in dolore nisi quis eu officia nostrud.\r\n"
                },
                {
                    "title": "Irure ex mollit cupidatat laboris.",
                    "content": "Ad enim excepteur eu aliquip ullamco enim elit officia Lorem. Non et magna eu ad exercitation tempor esse esse mollit enim laborum id nulla. Deserunt voluptate ullamco amet voluptate consectetur velit amet sunt esse non dolore elit. Eu do aliqua eu minim irure sint Lorem aliqua anim. Ex magna amet in velit et cupidatat adipisicing voluptate exercitation tempor. Pariatur nostrud anim aliquip amet esse aliquip aute adipisicing velit fugiat veniam irure. Consequat deserunt amet eiusmod officia cillum ea aliqua officia.\r\n"
                },
                {
                    "title": "Culpa est anim qui quis laboris minim id anim ad.",
                    "content": "Ipsum fugiat anim voluptate anim excepteur. Adipisicing exercitation qui culpa non incididunt reprehenderit nisi officia aute culpa laborum. Non aliquip dolore occaecat excepteur quis in culpa exercitation laboris sint voluptate aliqua ex minim. Do Lorem sint minim ad magna quis.\r\n"
                },
                {
                    "title": "Sit enim sunt velit occaecat ullamco sit.",
                    "content": "Fugiat deserunt consequat cupidatat nulla nisi reprehenderit tempor incididunt laboris irure sit eu. Commodo nisi incididunt incididunt deserunt adipisicing labore fugiat ipsum aute commodo sunt est amet est. Ipsum et excepteur minim sit cupidatat exercitation occaecat laborum ex ipsum laborum aute. Do fugiat duis exercitation in laborum mollit duis aliquip in occaecat eu proident.\r\n"
                },
                {
                    "title": "Proident esse aliqua Lorem sit nostrud fugiat reprehenderit enim tempor aute exercitation esse ullamco.",
                    "content": "Sit amet veniam tempor pariatur. Cupidatat elit mollit occaecat est reprehenderit elit. Nisi deserunt aute Lorem ut in id ullamco deserunt qui exercitation Lorem ex cillum.\r\n"
                },
                {
                    "title": "Eiusmod incididunt ipsum laborum occaecat.",
                    "content": "Esse duis id qui nisi qui officia deserunt culpa. Duis labore in consequat non id cillum eiusmod et id elit duis fugiat. Est ipsum non ut quis. Duis occaecat sit consequat ad aliqua laboris.\r\n"
                },
                {
                    "title": "Ut est dolor incididunt ipsum.",
                    "content": "Culpa consectetur ipsum esse commodo. Do esse eiusmod anim sunt excepteur irure incididunt exercitation labore cillum et anim occaecat sint. Labore pariatur duis nulla officia proident non laboris ad irure ad ea exercitation. Proident eu minim irure sint amet sunt cillum dolor ullamco ea aliquip dolore sunt. Exercitation occaecat enim sunt minim proident ullamco et nisi cupidatat. Commodo esse sint anim excepteur ullamco exercitation deserunt non sit nisi in nisi. Ex dolore do cillum culpa Lorem.\r\n"
                },
                {
                    "title": "Dolor ipsum sint ut dolore amet.",
                    "content": "Enim ex sunt ex officia sunt et culpa. Irure culpa irure minim ex. Eu in esse ex in. Dolor deserunt velit tempor et occaecat culpa duis labore mollit cupidatat incididunt est cupidatat. Quis irure sit deserunt mollit. Ea deserunt enim ad amet et duis in elit officia dolor in.\r\n"
                },
                {
                    "title": "Nostrud est minim labore ad occaecat culpa in consequat tempor pariatur consequat anim.",
                    "content": "Esse nostrud laboris incididunt in cupidatat quis id. Excepteur non nisi ut veniam ex consequat dolor laborum elit cillum dolor eiusmod. Aute aliqua amet pariatur cupidatat et duis.\r\n"
                },
                {
                    "title": "Officia proident id Lorem nisi velit.",
                    "content": "Qui nulla in laborum ex ullamco. Ex nostrud dolor enim esse enim Lorem. Eiusmod anim velit sint nisi quis nostrud aliqua officia exercitation tempor non esse. Commodo ad qui ipsum culpa cillum occaecat ex ea ut pariatur nulla. Ea ea aute aliqua aliqua eiusmod anim.\r\n"
                },
                {
                    "title": "Minim qui ad ut culpa qui commodo.",
                    "content": "Anim in excepteur tempor minim id nisi ullamco in enim commodo. Commodo esse anim sit magna officia cillum duis eiusmod nulla exercitation. Excepteur culpa Lorem laboris exercitation Lorem exercitation eiusmod. Nostrud consequat anim aliquip occaecat exercitation labore. Tempor non adipisicing culpa voluptate sunt ea irure ut proident eiusmod.\r\n"
                },
                {
                    "title": "Consectetur amet cupidatat ullamco culpa labore aute.",
                    "content": "Elit ad sit sit anim. Duis et dolor incididunt cupidatat cupidatat. Esse anim nisi non elit ipsum excepteur aliqua occaecat cillum. Labore cupidatat quis qui incididunt consequat cupidatat aliquip enim. Minim incididunt irure sit labore laborum labore nisi amet exercitation est eiusmod. Dolor veniam est amet adipisicing veniam do culpa. Id nisi mollit ad id non proident ut culpa.\r\n"
                },
                {
                    "title": "Sit ea ut et aliqua ipsum cillum elit ea do laborum et fugiat.",
                    "content": "Reprehenderit aute consectetur amet ad enim eu non officia duis aliqua velit anim. Occaecat qui ipsum ut Lorem deserunt quis laborum ad esse officia laborum cillum excepteur. Laborum laborum nulla et ea officia do fugiat ea voluptate do laboris. Ullamco Lorem labore ipsum est magna deserunt pariatur anim exercitation. Consequat elit eu labore ullamco tempor tempor amet consectetur ea dolor. Incididunt laborum velit aute occaecat ea irure elit anim. Minim consequat magna incididunt consequat eu mollit minim id ipsum ipsum irure in cillum.\r\n"
                },
                {
                    "title": "Aliqua nisi enim ullamco nulla in et ad voluptate quis.",
                    "content": "Quis sit aliquip laboris commodo tempor esse in quis ea veniam. Incididunt exercitation laborum cupidatat eu duis labore fugiat reprehenderit in anim. Ad cillum proident consequat officia officia. Magna nisi labore ad nulla aute. In veniam in culpa esse cupidatat velit consequat sint laborum ex nulla velit velit. Culpa Lorem incididunt ut excepteur id ea ut.\r\n"
                },
                {
                    "title": "Duis tempor mollit esse laborum deserunt id voluptate culpa qui.",
                    "content": "Cillum mollit labore sint et ex velit dolore. Commodo dolore enim aliquip aute quis consequat ex. Enim dolore amet anim incididunt occaecat esse irure amet. Elit nisi duis anim qui consequat voluptate qui occaecat incididunt aliqua id anim. Consequat consectetur tempor cillum officia. Sunt cillum duis minim est occaecat.\r\n"
                },
                {
                    "title": "In minim ex culpa et eiusmod magna consequat non eiusmod.",
                    "content": "Dolor fugiat exercitation laborum ex esse in. Sunt Lorem pariatur occaecat velit. Incididunt consectetur consequat dolor aliqua nulla non occaecat nulla amet.\r\n"
                },
                {
                    "title": "Consectetur ipsum eu sit elit cupidatat ex nostrud sint officia voluptate quis non quis.",
                    "content": "Amet excepteur proident nulla pariatur eiusmod ipsum Lorem. Amet proident cupidatat reprehenderit ad labore incididunt. Duis do voluptate dolore consequat aliqua. Esse minim enim irure duis eu ut Lorem incididunt adipisicing. Cillum eu irure tempor nostrud labore adipisicing Lorem minim sit duis adipisicing enim id.\r\n"
                },
                {
                    "title": "Ipsum velit culpa aliqua eu enim veniam ex adipisicing.",
                    "content": "Laboris culpa sunt eiusmod sint laboris commodo ipsum ad. Irure culpa et ad occaecat occaecat. Laboris veniam officia commodo adipisicing quis pariatur pariatur ad do. Adipisicing proident pariatur in nulla qui qui amet consequat nulla voluptate deserunt sit elit.\r\n"
                },
                {
                    "title": "Eu ut sint proident aliquip adipisicing nostrud eiusmod deserunt commodo magna officia.",
                    "content": "Laboris dolore nulla exercitation cillum deserunt nostrud aute ut ipsum aute nisi do enim. Laboris quis consequat labore consectetur anim deserunt pariatur excepteur qui mollit. Excepteur ad labore elit Lorem et laborum ea.\r\n"
                },
                {
                    "title": "Duis commodo Lorem ipsum commodo et sunt aliquip pariatur sunt officia dolor consequat.",
                    "content": "Exercitation quis ullamco officia culpa ad do pariatur deserunt non excepteur ad nostrud occaecat. Proident culpa consequat adipisicing est laboris labore ullamco consectetur sunt do pariatur est. Ad anim esse pariatur dolor consectetur anim pariatur labore laborum qui nostrud veniam. Consectetur enim consectetur nostrud elit culpa. Sint enim aliqua incididunt eu.\r\n"
                }
            ]
        }
    }

    render() {
        return (
            <div className="purple lighten-1 white-text">
                <Navbar></Navbar>
                <NoteBoxSideBar></NoteBoxSideBar>
                <main className="container-fluid">
                    <div className="row center">
                        <h4 className="white-text">VI Cheatsheet</h4>
                    </div>
                    <div className="row center">
                        <span className="white-text">Nisi ullamco aliquip id pariatur id adipisicing magna sunt exercitation in.</span>
                    </div>
                    <div id="notebox-meta" className="row">
                        <div className="col m12 s12 center">
                            {this.state.tags.map((tag, i) => <NoteBoxTag key={i} name={tag}></NoteBoxTag>)}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col m10 offset-m1">
                            <div className="col s12 m12">
                                {this.state.notes.map((note, i) => <Note key={i} title={note.title} content={note.content}></Note>)}
                            </div>
                        </div>
                    </div>
                </main>
                <Footer></Footer>
            </div>
        )
    }
}

export default NoteBox;
