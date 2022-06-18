class QueueElement {
constructor(element, priority) {
	this.element = element;
	this.priority = priority;
}
}
class PriorityQueue {
	constructor() {
		this.queueItems = [];
	}
	enqueueFunction(element, priority) {
		let queueElement = new QueueElement(element, priority);
		let contain = false;

		for (let i = 0; i < this.queueItems.length; i++) {
			if (this.queueItems[i].priority > queueElement.priority) {
				this.queueItems.splice(i, 0, queueElement);
				contain = true;
				break;
			}
		}
		if (!contain) {
			this.queueItems.push(queueElement);
		}
	}
	dequeueFunction() {
		if (this.isPriorityQueueEmpty()) {
			return "No elements present in Queue";
		}
		return this.queueItems.shift();
	}
	front() {
		if (this.isPriorityQueueEmpty()) {
			return "No elements present in Queue";
		}
		return this.queueItems[0];
	}
	rear() {
		if (this.isPriorityQueueEmpty()) {
			return "No elements present in Queue";
		}
		return this.queueItems[this.queueItems.length - 1];
	}
	isPriorityQueueEmpty() {
		return this.queueItems.length === 0;
	}
	printPriorityQueue() {
		let queueString = "";
		for (let i = 0; i < this.queueItems.length; i++)
			queueString += this.queueItems[i].element + " ";
		return queueString;
	}
}