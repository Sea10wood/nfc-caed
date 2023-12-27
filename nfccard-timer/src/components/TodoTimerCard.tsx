const TodoItem = () => {
	return (
        <div className="px-12 py-2">

		<div className="flex w-[100%] border border-gray-300  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
			<div className="flex items-center justify-center w-24 bg-emerald-500">
				
			</div>
			<div className="px-4 py-2 -mx-3">
				<div className="mx-3">
					<span className="font-semibold text-emerald-500 dark:text-emerald-400">
						課題
					</span>
					<p className="text-sm text-gray-600 dark:text-gray-200">
						テストテスト
					</p>
				</div>
			</div>
		</div>
        </div>
	);
};

export default TodoItem;