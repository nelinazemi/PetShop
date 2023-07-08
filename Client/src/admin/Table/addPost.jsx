import {useState} from 'react'

export default function AddPost(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addPost(title, body);
        setTitle('');
        setBody('');
    };    
    
    return (
        <div className='card container w-50 p-5'>
            <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-md-12 my-2">
                            <div class="form-group">
                                <label class="label my-1 text-dir-rtl" for="email">نام محصول</label>
                                <input type="text" class="form-control" name="email" id="email" value={title} onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                        </div>
                        <div class="col-md-12 my-2"> 
                            <div class="form-group">
                                <label class="label my-1" for="name">آپلود عکس محصول</label>
                                <input type="text" class="form-control" name="name" id="name" value={body} onChange={(e) => setBody(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                <button type="submit" className="btn" style={{backgroundColor: ""}}>اضافه کردن محصول</button>
            </form>
        </div>

    )
}