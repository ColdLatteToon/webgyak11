let workerCounter = 0;
function calculate()
{
    workerCounter++;
    postMessage(workerCounter);
    setTimeout(calculate, 1000);
}
calculate();