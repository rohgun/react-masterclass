import {atom} from 'recoil';

export interface ITodo{
    id: number;
    text: string; 
}

interface IToDoState {
    [key:string]: ITodo[]; 
}

export const toDosState = atom<IToDoState>({
    key:"toDos",
    default: {
        "휴지통": []
    },
    effects_UNSTABLE: [
        ({ setSelf, onSet}) =>{
            const savedValue  = localStorage.getItem("toDos");
            if (savedValue) setSelf(JSON.parse(savedValue));
            
            onSet((newValue, _, isReset) =>{
                if(isReset) {
                    localStorage.removeItem("toDos");
                } else {
                    localStorage.setItem("toDos", JSON.stringify(newValue));
                }
            });
        },
    ],
});

export const boardOrderState = atom<string[]>({
    key: "boardOrder",
    default: [],
    effects_UNSTABLE: [
        ({ setSelf, onSet}) =>{
            const savedOrder = localStorage.getItem("boardOrder");
            if(savedOrder) setSelf(JSON.parse(savedOrder));
            onSet((newValue, _, isReset) => {
                if (isReset) {
                    localStorage.removeItem("boardOrder");
                } else {
                    localStorage.setItem("boardOrder", JSON.stringify(newValue));
                }
            });
        },
    ],
});