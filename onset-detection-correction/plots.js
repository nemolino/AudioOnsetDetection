plotData1 = (inputReal, df, percussiveFeature) => {
	var trace1 = {
		x: Array.from({ length: inputReal.length }, (_, i) => i + 1),
		y: inputReal,
		type: 'scatter',
		name: 'input signal',
		line: { color: 'rgb(200, 200, 200)' }
	};
	var trace2 = {
		x: Array.from({ length: inputReal.length }, (_, i) => (i + 1) * 441),
		y: df,
		type: 'scatter',
		name: 'complex domain detection',
		line: { color: 'rgb(55, 128, 191)' }
	};
	var trace3 = {
		x: Array.from({ length: inputReal.length }, (_, i) => (i + 1) * 441),
		y: percussiveFeature,
		type: 'scatter',
		name: 'percussive feature detection',
		line: { color: 'rgb(0, 240, 0)' }
	};
	var data = [trace1, trace2, trace3];
	var layout = {
		title: 'Detection functions with input signal',
		yaxis: { range: [-1, 1] }
	};
	Plotly.newPlot('result', data, layout);
}

plotData2 = (df, threshold) => {
	var trace1 = {
		x: Array.from({ length: df.length }, (_, i) => i + 1),
		y: df,
		type: 'scatter',
		name: 'detection function',
		line: { color: 'rgb(55, 128, 191)' }
	};
	var trace2 = {
		x: Array.from({ length: threshold.length }, (_, i) => i + 1),
		y: threshold,
		type: 'scatter',
		name: 'threshold',
		line: { dash: 'dot', color: 'rgb(255, 0, 0)' }
	};
	var data = [trace1, trace2];
	var layout = {
		title: 'Detection function with adaptive threshold'
	};
	Plotly.newPlot('df-threshold', data, layout);
}

plotData3 = (df, peaks) => {
	var trace1 = {
		x: Array.from({ length: df.length }, (_, i) => i + 1),
		y: df,
		type: 'scatter',
		name: 'detection function',
		line: { color: 'rgb(55, 128, 191)' }
	};
	var trace2 = {
		x: peaks[0],
		y: peaks[1],
		mode: 'markers',
		type: 'scatter',
		name: 'peaks'
	};
	var data = [trace1, trace2];
	var layout = {
		title: 'Detection function minus threshold with peaks > 0'
	};
	Plotly.newPlot('df-peaks', data, layout);
}