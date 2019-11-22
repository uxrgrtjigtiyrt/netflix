const withLayout = Page=>{
    return ()=>{
        <div>
            <Page />
        </div>
    }
}

export default withLayout;