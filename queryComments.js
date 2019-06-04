/**
 * Select comment nodes
 * @param  {DOMElement}      [context=document] A DOM node, defaults to document.
 * @param  {function|RegExp} [filter]           Only return comment nodes that match a regular expression or a filter function.
 * @return Array                                A array containing the comment nodes.
 * @author Victor N. wwww.victorborges.com
 * @date   2017-07-07
 */
function queryComments(context, filter) {
    //console.time('getComments');
    var nodeIterator = document.createNodeIterator(
        context || document,
        NodeFilter.SHOW_COMMENT, {
            acceptNode: function(node) {
                return NodeFilter.FILTER_ACCEPT;
            }
        }
    );

    var control = {
        abort: false,
        breakOnFirst: false
    };

    var comments = [];
    if (typeof filter === "function") {
        while (nodeIterator.nextNode()) {
            if (filter.call(control, nodeIterator.referenceNode.nodeValue, nodeIterator.referenceNode)) {
                comments.push(nodeIterator.referenceNode);
                if (control.breakOnFirst) break;
            }
            if (control.abort) break;
        }
    } else if (filter instanceof RegExp) {
        control.breakOnFirst = !filter.global;
        while (nodeIterator.nextNode()) {
            if (filter.exec(nodeIterator.referenceNode.nodeValue) !== null) {
                comments.push(nodeIterator.referenceNode);
                if (control.breakOnFirst) break;
            }
        }
    } else {
        while (nodeIterator.nextNode()) {
            comments.push(nodeIterator.referenceNode);
        }
    }
    //console.timeEnd('getComments');
    return comments;
}
