import React from 'react';

function CustomLabel(
    { text,
        isDefaultGhost,
        isDefaultSolid,
        isPopularGhost,
        isPopularSolid,
        isNewGhost,
        isNewSolid,
        isFeaturedGhost,
        isFeaturedSolid,
        isComingGhost,
        isComingSolid
    }) {
        
    const labelClasses = [
        'label',
        'font-hairline--2',
        isDefaultGhost && 'label-default--ghost',
        isDefaultSolid && 'label-default--solid',
        isPopularGhost && 'label-popular--ghost',
        isPopularSolid && 'label-popular--solid',
        isNewGhost && 'label-new--ghost',
        isNewSolid && 'label-new--solid',
        isFeaturedGhost && 'label-featured--ghost',
        isFeaturedSolid && 'label-featured--solid',
        isComingGhost && 'label-coming--ghost',
        isComingSolid && 'label-coming--solid'
    ].filter(Boolean).join(' ');

    return (
        <label className={labelClasses}>
            {text}
        </label>
    );
}

export default CustomLabel;
